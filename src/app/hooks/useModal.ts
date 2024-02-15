import { useState } from "react";

type Props = {};

export default function useModal({}: Props) {
    const [open, setOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState<any>(null);

    const onOpenModal = (character: any) => {
        setSelectedCharacter(character);
        setOpen(true);
    };

    const onCloseModal = () => setOpen(false);
    return { open, selectedCharacter, onOpenModal, onCloseModal };
}
