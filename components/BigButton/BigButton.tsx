import css from "./BigButton.module.css";

interface BigButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    href?: string;
}

export function BigButton({ children, onClick, type = "button" }: BigButtonProps) {
    return (
        <button className={css.button} onClick={onClick} type="button">
            {children}
        </button>
    )
}