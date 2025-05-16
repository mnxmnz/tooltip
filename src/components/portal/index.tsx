'use client';

import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  containerId?: string;
}

export default function Portal({ children, containerId }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMounted(true);
    if (containerId) {
      setContainer(document.getElementById(containerId));
    }
    return () => setMounted(false);
  }, [containerId]);

  if (typeof window === 'undefined') {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return createPortal(children, container || document.body);
}
