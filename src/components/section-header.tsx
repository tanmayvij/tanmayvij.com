interface SectionHeaderProps {
  index: string;
  kicker: string;
  title: string;
  lead?: string;
}

export function SectionHeader({ index, kicker, title, lead }: SectionHeaderProps) {
  return (
    <div className="sec-head">
      <div className="sec-kicker">
        <span className="sec-index">{index}</span>
        <span className="sec-kicker-txt">{kicker}</span>
      </div>
      <h2 className="sec-title">{title}</h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </div>
  );
}
