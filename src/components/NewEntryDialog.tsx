"use client";

import { FC, useState } from "react";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  addToLoginDetails,
  createLoginDetails,
  getUserLoginDetails,
} from "@/lib/dbUtils";

interface NewEntryDialogProps {}

const NewEntryDialog: FC<NewEntryDialogProps> = ({}) => {
  const [name, setName] = useState<string>("Gmail");
  const [site, setSite] = useState<string>("mail.google.com");
  const [login, setLogin] = useState<string>("adi4545aditya@gmail.com");
  const [password, setPassword] = useState<string>("SuperSecretPass");

  const handleSubmit = async () => {
    // const loginDetailsId = (await getUserLoginDetails())[0]?.id
    //   ? (await getUserLoginDetails())[0].id
    //   : await createLoginDetails();

    const getloginDetailsId = async () => {
      const existingLoginDetails = (await getUserLoginDetails())[0]?.id;
      if (!existingLoginDetails) {
        const newLoginDetails = await createLoginDetails();
        return newLoginDetails;
      }
      return existingLoginDetails;
    };

    const loginDetailsId = await getloginDetailsId();

    loginDetailsId &&
      (await addToLoginDetails(loginDetailsId, {
        url: site || "",
        name: name || "",
        image: "",
        login: login || "",
        password: password || "",
      }));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex-none rounded-full w-9 h-9"
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Password</DialogTitle>
          <DialogDescription>Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              defaultValue={name}
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="site" className="text-right">
              Site
            </Label>
            <Input
              value={site}
              onChange={(e) => setSite(e.target.value)}
              id="site"
              defaultValue={site}
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="login" className="text-right">
              Login
            </Label>
            <Input
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              id="login"
              defaultValue={login}
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              defaultValue={password}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewEntryDialog;
