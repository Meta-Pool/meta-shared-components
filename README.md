# Meta Shared Components

# Components

- Page Blocker
- Color Mode Toggle

# Usage

## Page Blocker

In order to use the `Page Blocker`, we need to keep the component state to be used among components in our app.
You can use your favourite state management such as redux, zustand, recoil, etc. We are going to use `zustand`.

### Creating store

```ts
import create from "zustand/vanilla";
import type { PageBlockerState } from "@metapool/meta-shared-components";

export const blockerStore = create<PageBlockerState>(() => ({  message: "Confirm this action in your wallet", isActive: false }));
```

### Setting Store state example

```ts
import { blockerStore } from "../stores/pageBlocker";

export const PageBlockerStateSetter = () => {
    blockerStore.setState({ isActive: true });
    setInterval(async () => {
        blockerStore.setState({ isActive: false });
    }, 5000);
}
```

### Getting Store state & displaying Page Blocker

```tsx
import { PageBlocker, PageBlockerState} from '@metapool/meta-shared-components'
import { blockerStore } from "../stores/pageBlocker";

export default function PageBlockerExample() {
    const [pageBlocerState, setPageBlockerState] = useState<PageBlockerState>({
        isActive: false,
        message: "",
    });
    useEffect(
        () =>
        blockerStore.subscribe((state) => {
            setPageBlockerState({
                isActive: state.isActive,
                message: state.message,
            });
        }),
        []
    );
  return (
    <PageBlocker isActive={pageBlocerState.isActive} message={pageBlocerState.message}  />
  );
}
```

## Color Mode Toggle

To manage color mode in your application, toggle between dark and light modes.

```tsx
  <ColorModeToggle />
```