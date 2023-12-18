export type DropdownProps = {
    label: string;
    options: DropdownOptionProps[];
}

export type DropdownOptionProps = {
    label: string;
    classes?: string;
    onClick?: () => void;
    href?: string;
}