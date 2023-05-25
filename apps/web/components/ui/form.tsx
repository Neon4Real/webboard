import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

export function Field(props: ComponentPropsWithoutRef<"fieldset">) {
    return <fieldset {...props} />;
}

Field.Label = function Label(props: ComponentPropsWithoutRef<"label">) {
    return (
        <label
            {...props}
            className={cn("font-semibold text-sm", props.className)}
        />
    );
};

Field.Description = function Description(props: ComponentPropsWithoutRef<"p">) {
    return (
        <p
            {...props}
            className={cn(
                "text-muted-foreground text-sm mb-4",
                props.className
            )}
        />
    );
};

Field.Error = function Error(props: ComponentPropsWithoutRef<"p">) {
    if (props.children == null) return <></>;

    return (
        <p
            {...props}
            className={cn("text-destructive text-xs mt-2", props.className)}
        />
    );
};
