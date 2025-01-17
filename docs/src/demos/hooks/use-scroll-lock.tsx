import React from 'react';
import { useScrollLock } from '@mantine/hooks';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { Group, Button } from '@mantine/core';

const code = `import { useScrollLock } from '@mantine/hooks';
import { Button } from '@mantine/core';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';

export function Demo() {
  const [lockScroll, setLockScroll] = useScrollLock();

  return (
    <Button
      onClick={() => setLockScroll((c) => !c)}
      variant="outline"
      leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
    >
      {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
    </Button>
  );
}`;

function Demo() {
  const [lockScroll, setLockScroll] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setLockScroll((c) => !c)}
        variant="outline"
        leftIcon={lockScroll ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {lockScroll ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}

export const useScrollLockHook: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
