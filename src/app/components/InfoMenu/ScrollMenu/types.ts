import { SectionId } from "../../../types/variants";

export interface ScrollMenuProps {
  refs: Record<SectionId, React.RefObject<HTMLDivElement>>;
  onSelect: (id: SectionId) => void;
  active: SectionId | null;
}
