import React, { useEffect, useRef, useState } from 'react'

export default function Modal() {
    const [open, setOpen] = useState<Boolean>(false);
    const isRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (open && isRef.current) {
            isRef.current.focus();
        }
    }, [open]);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
  return (
    <div>
      <h1>Ung dung React voi Modal va Focus input</h1>
      <button onClick={handleOpen}>Mo Modal</button>
      {open && (
        <div className='Modul'>
            <h1>Dang nhap</h1>
            <input type="text" ref={isRef}/><br />
            <button onClick={handleClose}>Dong</button>
        </div>
      )}
    </div>
  )
}