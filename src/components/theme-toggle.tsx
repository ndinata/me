import { useCallback, useState } from "react";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

/**
 * `localstorage` key for the app theme setting.
 *
 * NOTE: this needs to be the same key as the one used in the script at the root
 * layout (`@/layouts/root.astro`).
 */
const STORAGE_KEY_APP_THEME = "theme";

type AppTheme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<AppTheme>(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem(STORAGE_KEY_APP_THEME)
    ) {
      return localStorage.getItem(STORAGE_KEY_APP_THEME) as AppTheme;
    }
    return "system";
  });

  const selectTheme = useCallback((newTheme: string) => {
    if (newTheme === "system") {
      setTheme("system");
      document.documentElement.classList[
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "add"
          : "remove"
      ]("dark");
      localStorage.removeItem(STORAGE_KEY_APP_THEME);
    } else {
      setTheme(newTheme as AppTheme);
      document.documentElement.classList[
        newTheme === "dark" ? "add" : "remove"
      ]("dark");
      localStorage.setItem(STORAGE_KEY_APP_THEME, newTheme);
    }
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="-mr-2 h-8 w-8"
          onClick={useCallback(() => setOpen((o) => !o), [])}
        >
          <IconSun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconMoonStars className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme} onValueChange={selectTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
