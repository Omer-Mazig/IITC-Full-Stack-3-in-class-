import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ProductItem } from "./product-item";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "./mode-toggle";

export default function App() {
  return (
    <div className={cn("bg-red-500", "bg-red-100")}>
      <Badge
        variant="warning"
        onClick={() => {}}
        style={{}}
      >
        Click me
      </Badge>
      <Button>Button</Button>

      <div className="grid grid-cols-3 gap-4 bg-neutral-600 p-12">
        <ProductItem title="baba" />
        <ProductItem title="mama" />
      </div>

      <ModeToggle />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button asChild>
              <a href="#">Link</a>
            </Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={30}>
            <p>this is a lnik!!!!!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
