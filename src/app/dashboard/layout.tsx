import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusIcon, SearchIcon } from "lucide-react";
import NewEntryDialog from "@/components/NewEntryDialog";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Passwords</CardTitle>
              <CardDescription>
                You don&apos;t have to remember 235 passwords.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pt-3">
              <div className="top-0 z-10 sticky flex items-center space-x-2 backdrop-blur-md px-6 py-3">
                <NewEntryDialog />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="flex-auto w-full"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="flex-none rounded-full w-9 h-9"
                >
                  <SearchIcon className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-8 px-6 pt-3">{children}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
