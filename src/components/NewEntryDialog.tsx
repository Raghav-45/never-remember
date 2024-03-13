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
import { addToLoginDetails, createLoginDetails } from "@/lib/dbUtils";

interface NewEntryDialogProps {}

const NewEntryDialog: FC<NewEntryDialogProps> = async ({}) => {
  const [name, setName] = useState<string>();
  const [site, setSite] = useState<string>();
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async () => {
    const loginDetailsId = await createLoginDetails();
    await addToLoginDetails(loginDetailsId, {
      url: site || "",
      name: name || "",
      image: "",
      login: login || "",
      password: password || "",
    });
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
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              defaultValue="Gmail"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="site" className="text-right">
              Site
            </Label>
            <Input
              onChange={(e) => setSite(e.target.value)}
              id="site"
              defaultValue="mail.google.com"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="login" className="text-right">
              Login
            </Label>
            <Input
              onChange={(e) => setLogin(e.target.value)}
              id="login"
              defaultValue="adi4545aditya@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              defaultValue="SuperSecretPass"
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
