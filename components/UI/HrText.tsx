interface HorizontalRuleProps {
  text: string;
}

export default function HorizontalRuleWithTextInMiddle({ text }: HorizontalRuleProps) {
  return (
    <div className="flex items-center my-4">
      <hr className="grow border-t border-gray-300" />
      <span className="mx-4 text-gray-500 text-sm font-medium">{text}</span>
      <hr className="grow border-t border-gray-300" />
    </div>
  );
}
