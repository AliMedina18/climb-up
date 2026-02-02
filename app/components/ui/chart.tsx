"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "./utils";

/* THEMES */

const THEMES = { light: "", dark: ".dark" } as const;

/* ---------------------------------- */
/* CONFIG */
/* ---------------------------------- */

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<keyof typeof THEMES, string>;
  };
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) {
    throw new Error("useChart must be used within ChartContainer");
  }
  return ctx;
}

/* ---------------------------------- */
/* CONTAINER */
/* ---------------------------------- */

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  const reactId = React.useId();
  const chartId = `chart-${id ?? reactId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* ---------------------------------- */
/* STYLE */
/* ---------------------------------- */

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
  const entries = Object.entries(config).filter(
    ([, v]) => v.color || v.theme,
  );

  if (!entries.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${entries
  .map(([key, cfg]) => {
    const color =
      cfg.theme?.[theme as keyof typeof cfg.theme] ?? cfg.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
}

/* ---------------------------------- */
/* SAFE PAYLOAD TYPE */
/* ---------------------------------- */

type RechartsPayloadItem = {
  name?: React.ReactNode;
  value?: number | string;
  color?: string;
  dataKey?: string | number;
  payload?: Record<string, unknown>;
};

/* ---------------------------------- */
/* TOOLTIP */
/* ---------------------------------- */

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
}: {
  active?: boolean;
  payload?: unknown;
  label?: React.ReactNode;
  className?: string;
  hideLabel?: boolean;
}) {
  const { config } = useChart();

  if (!active || !Array.isArray(payload) || payload.length === 0) {
    return null;
  }

  const items = payload as RechartsPayloadItem[];

  return (
    <div
      className={cn(
        "border-border/50 bg-background min-w-32 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className,
      )}
    >
      {!hideLabel && label && (
        <div className="mb-1 font-medium">{label}</div>
      )}

      <div className="grid gap-1.5">
        {items.map((item, index) => {
          const key = String(item.dataKey ?? item.name ?? index);
          const itemConfig = config[key];

          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2"
            >
              <span className="text-muted-foreground">
                {itemConfig?.label ?? item.name}
              </span>
              {typeof item.value === "number" && (
                <span className="font-mono font-medium">
                  {item.value.toLocaleString()}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* LEGEND */
/* ---------------------------------- */

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  payload,
  className,
}: {
  payload?: unknown;
  className?: string;
}) {
  const { config } = useChart();

  if (!Array.isArray(payload)) return null;

  const items = payload as RechartsPayloadItem[];

  return (
    <div className={cn("flex gap-4", className)}>
      {items.map((item, index) => {
        const key = String(item.dataKey ?? item.name ?? index);
        const itemConfig = config[key];

        return (
          <div key={index} className="flex items-center gap-1.5">
            <div
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span>{itemConfig?.label ?? item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------------------------- */

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
