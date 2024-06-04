import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  return (
    <div className="w-screen bg-transparent absolute top-0 z-20">
      <div className="relative container flex justify-between pt-10">
        <div>
          <h1 className="text-4xl text-slate-200 font-medium">iQuestions</h1>
        </div>
        <div className="text-slate-200">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2 px-2">
                Language <ChevronDownIcon className="mr-2 h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Portuguese</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
