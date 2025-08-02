import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    React.useEffect(() => {
        const textarea = textareaRef.current
        if (textarea) {
            const resizeTextarea = () => {
                textarea.style.height = 'auto'
                textarea.style.height = textarea.scrollHeight + 'px'
            }

            textarea.addEventListener('input', resizeTextarea)
            resizeTextarea() // Initial resize

            return () => textarea.removeEventListener('input', resizeTextarea)
        }
    }, [])

    return (
        <textarea
            ref={textareaRef}
            data-slot="textarea"
            className={cn(
                "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none resize-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                className
            )}
            {...props}
        />
    )
}

export { Textarea } 