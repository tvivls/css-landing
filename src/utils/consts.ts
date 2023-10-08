export const options = [
  {
    value: 'group1',
    label: 'Группа 1',
    children: [
      { value: 'child1.1', label: 'Группа 1.1' },
      { value: 'child1.2', label: 'Группа 1.2' },
      {
        value: 'child1.3',
        label: 'Группа 1.3',
        children: [
          { value: 'child1.3.1', label: 'Группа 1.3.1' },
          { value: 'child1.3.2', label: 'Группа 1.3.2' },
          { value: 'child1.3.3', label: 'Группа 1.3.3' },
        ],
      },
      {
        value: 'child1.4',
        label: 'Группа 1.4',
        children: [
          { value: 'child1.4.1', label: 'Группа 1.4.1' },
          { value: 'child1.4.2', label: 'Группа 1.4.2' },
          { value: 'child1.4.3', label: 'Группа 1.4.3' },
        ],
      },
      {
        value: 'child1.5',
        label: 'Группа 1.5',
        children: [
          { value: 'child1.5.1', label: 'Группа 1.5.1' },
          { value: 'child1.5.2', label: 'Группа 1.5.2' },
          { value: 'child1.5.3', label: 'Группа 1.5.3' },
        ],
      },
      { value: 'child1.6', label: 'Группа 1.6' },
      { value: 'child1.7', label: 'Группа 1.7' },
    ],
  },

  {
    value: 'group2',
    label: 'Группа 2',
    children: [
      {
        value: 'child2.1',
        label: 'Группа 2.1',
        children: [
          { value: 'child2.1.1', label: 'Группа 2.1.1' },
          { value: 'child2.1.2', label: 'Группа 2.1.2' },
          { value: 'child2.1.3', label: 'Группа 2.1.3' },
        ],
      },
      {
        value: 'child2.2',
        label: 'Группа 2.2',
        children: [
          { value: 'child2.2.1', label: 'Группа 2.2.1' },
          { value: 'child2.2.2', label: 'Группа 2.2.2' },
          { value: 'child2.2.3', label: 'Группа 2.2.3' },
        ],
      },
      { value: 'child2.3', label: 'Группа 2.3' },
    ],
  },
];

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
