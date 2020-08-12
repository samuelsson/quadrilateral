type HiddenArgTypes = {
  [key: string]: { table: { disable: boolean } };
};

// Used for hiding auto generated controls in stories.
// Always hiding `theme`.
export const hideControls = (args: string[]): HiddenArgTypes => {
  return args.reduce(
    (result, item) => {
      return {
        ...result,
        [item]: { table: { disable: true } },
      };
    },
    { theme: { table: { disable: true } } }
  );
};
