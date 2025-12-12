"use client";

import { useApp } from "@contexts";
import { ThemeToggle, Separator, Button, Sheet } from "@components";
import Link from "next/link";
import { SiGithub, SiInstagram, SiYoutube } from "react-icons/si";

export default function CODEPLACE_NAVBAR() {
  const { mode } = useApp();

  if (mode !== "codeplace") return null;

  return (
    <nav className="flex w-full items-center justify-between px-2 py-2 fixed bg-background/10 backdrop-blur-sm z-50">
      <Link href={"/"}>
        <Button
          variant="link"
          className="text-xs md:text-sm font-thin md:font-normal"
        >
          {"[ anisiocode ]"}
        </Button>
      </Link>

      <Sheet>
        <Sheet.Trigger asChild>
          <Button
            variant={"ghost"}
            className="text-xs md:text-sm font-thin md:font-normal"
          >
            {"[ Menu ]"}
          </Button>
        </Sheet.Trigger>
        <Sheet.Content
          side="right"
          className="bg-background/50 backdrop-blur-sm md:bg-background md:backdrop-blur-none"
        >
          <Sheet.Header>
            <Sheet.Title>cODE_PLACE</Sheet.Title>
            <Sheet.Description>
              This is just a small world for now, but very soon it will be
              filled with content.
            </Sheet.Description>
            <div className="flex flex-row items-center gap-4 h-6 mt-4">
              <div>
                <Link href={"https://github.com/anisiocode"} target="_">
                  <Button variant={"ghost"} size={"icon"}>
                    <SiGithub className={"size-5"} />
                  </Button>
                </Link>
                <Link href={"https://instagram.com/_u/anisiocode"} target="_">
                  <Button variant={"ghost"} size={"icon"}>
                    <SiInstagram className={"size-5"} />
                  </Button>
                </Link>
                <Link href={"https://youtube.com/@anisiocode"} target="_">
                  <Button variant={"ghost"} size={"icon"}>
                    <SiYoutube className={"size-5"} />
                  </Button>
                </Link>
              </div>
              <Separator orientation="vertical" />
              <ThemeToggle />
            </div>
          </Sheet.Header>
          <Sheet.Footer className="text-xs md:text-sm font-thin md:font-normal">
            &copy; anisiocode, all rights reserved
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    </nav>
  );
}
