"use client";

import { GrJava } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPython } from "react-icons/si";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useTranslation } from "react-i18next";

interface HomeCommandProps {
  onValueChange: (value: string) => void;
}

export function HomeCommand({ onValueChange }: HomeCommandProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    onValueChange(searchTerm);
  }, [searchTerm]);

  return (
    <>
      <p className="text-sm text-slate-200">
        {t("common.press")}{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-500 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>
          <span className="text-sm">K</span>
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          onValueChange={onValueChange}
          placeholder={t("kbar.placeholder")}
        />
        <CommandList>
          <CommandEmpty>
            <Button
              onClick={() => {
                setOpen(!open);
                setSearchTerm(searchTerm);
              }}
            >
              Search
            </Button>
          </CommandEmpty>
          <CommandGroup heading={t("kbar.suggestions")}>
            <CommandItem
              onClick={() => {
                setSearchTerm("Java");
                setOpen(!open);
              }}
            >
              <GrJava className="mr-2 h-4 w-4" />
              <span>Java</span>
            </CommandItem>
            <CommandItem
              onClick={() => {
                setSearchTerm("Python");
                setOpen(!open);
              }}
            >
              <SiPython className="mr-2 h-4 w-4" />
              <span>Python</span>
            </CommandItem>
            <CommandItem
              onClick={() => {
                setSearchTerm("Javascript");
                setOpen(!open);
              }}
            >
              <IoLogoJavascript className="mr-2 h-4 w-4" />
              <span>Javascript</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}
