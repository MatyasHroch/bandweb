import React from "react";

interface IconLinkProps {
    href: string;
    size?: number; // Velikost ikony (šířka a výška budou stejné)
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string; // Např. "noopener noreferrer"
    children?: React.ReactNode;  // Přidání children

}

export const IconLink: React.FC<IconLinkProps> = ({
    href,
    size = 64,
    target = "_blank",
    rel = "noopener noreferrer",
    children,
}) => {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: size,
                height: size,
                textDecoration: "none",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {children}
            </div>
        </a>
    );
};
