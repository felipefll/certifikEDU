interface Props {
  href: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export const MenuItem = ({ href, text, isActive, onClick }: Props) => {
  return (
    <li>
      <a
        href={href}
        className={`relative block py-2 px-3 ${
          isActive
            ? "text-[#fe7c21] border-b-4 border-[#fe7c21]"
            : "text-gray-900"
        } md:p-0 transition-all duration-300 ease-in-out`}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
