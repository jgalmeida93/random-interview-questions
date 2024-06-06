import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (lang: string) => {
    localStorage.setItem("i18nextLng", lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="w-screen h-[100px] flex items-center z-20">
      <div className="relative container flex justify-between">
        <div>
          <h1 className="text-4xl text-slate-200 font-medium">5Questions</h1>
        </div>
        <div className="text-slate-200 flex gap-2 items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">
                <IoLanguageSharp className="h-4 w-4 mr-1" />{" "}
                {t("common.language")}{" "}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                onClick={() => changeLanguageHandler("en")}
                key="new"
              >
                <span className="fi fi-us mr-2" /> {t("common.english")}
              </DropdownItem>
              <DropdownItem
                onClick={() => changeLanguageHandler("pt")}
                key="copy"
              >
                <span className="fi fi-br mr-2" /> {t("common.portuguese")}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button
            variant="bordered"
            size="sm"
            className="p-0 w-[30px] h-[40px]"
          >
            <a
              className=""
              href="https://github.com/jgalmeida93"
              target="_blank"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
