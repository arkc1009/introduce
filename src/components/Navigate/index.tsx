import Container from './Container';
import FakeSection from './FakeSection';

// interface ComponentListboxOption extends HasDisplayName {
//   <TagType extends React.ElementType = typeof DEFAULT_LISTBOX_TAG, ValueType = ListboxValueType>(
//     props: ListboxOptionProps<TagType, ValueType>,
//   ): JSX.Element;
// }

export default Object.assign(
  {},
  {
    Container: Container,
    Section: FakeSection,
  },
);
