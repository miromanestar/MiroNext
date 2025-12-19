"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const DelayedTransition = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, props.delay);
  }, [props.delay]);

  return (
    <Transition {...props} show={show} as="div">
      {props.children}
    </Transition>
  );
};

export default DelayedTransition;
