import {useState, useEffect, Fragment, FC, MouseEvent} from 'react';
import {
  Checkbox,
  DropdownButton,
  DropdownContainer, DropdownMenu,
  DropdownMenuItem,
  RotatableImage,
  TreeIndent,
} from '@/styledComponents/Multiselect';
import {dropdownSVG} from '../../public/Images';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

interface DropdownProps {
  options: Option[];
  onSelect: (selectedValues: string[]) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsRotated(!isRotated);
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, children?: Option[]) => {
    let updatedSelectedValues: string[] = [];

    if (selectedValues.includes(value)) {
      updatedSelectedValues = selectedValues.filter((val) => val !== value);
    } else {
      updatedSelectedValues = [...selectedValues, value];
    }

    if (children && children.length > 0) {
      const childValues = children.flatMap((child) => [child.value, ...(child.children || []).map((subchild) => subchild.value)]);
      if (updatedSelectedValues.includes(value)) {
        updatedSelectedValues = [...updatedSelectedValues, ...childValues];
      } else {
        updatedSelectedValues = updatedSelectedValues.filter((val) => !childValues.includes(val));
      }
    }

    setSelectedValues(updatedSelectedValues);
    onSelect(updatedSelectedValues);
  };

  const renderOptions = (options: Option[], level: number) => {
    return options.map((option) => (
      <Fragment key={option.value}>
        <DropdownMenuItem onClick={() => handleOptionClick(option.value, option.children)}>
          <TreeIndent level={level}>
            <Checkbox type="checkbox" checked={selectedValues.includes(option.value)} />
            {option.label}
          </TreeIndent>
        </DropdownMenuItem>
        {option.children && option.children.length > 0 && (
          <ul>{renderOptions(option.children, level + 1)}</ul>
        )}
      </Fragment>
    ));
  };

  useEffect(() => {
    const allOptionValues = options.flatMap((option) => [option.value, ...(option.children || []).map((child) => child.value)]);
    setSelectedValues((prevSelected) => prevSelected.filter((val) => allOptionValues.includes(val)));
  }, [options]);

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        Группы
        <span>
          <RotatableImage src={dropdownSVG} rotated={isRotated} alt="" style={{width: '20px', height: '20px', padding: '0'}}/>
        </span>
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {renderOptions(options, 0)}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
