"use client";

import Split from "react-split";
import { cn } from "./utils";

type ResizablePanelGroupProps = {
  children: React.ReactNode;
  className?: string;
};

function ResizablePanelGroup({ children, className }: ResizablePanelGroupProps) {
  return (
    <Split
      className={cn("flex h-full w-full", className)}
      sizes={[50, 50]}
      minSize={100}
      gutterSize={6}
      direction="horizontal"
    >
      {children}
    </Split>
  );
}

function ResizablePanel({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full overflow-auto">{children}</div>;
}

export { ResizablePanelGroup, ResizablePanel };
