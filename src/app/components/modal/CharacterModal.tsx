import React from "react";
import { Modal } from "react-responsive-modal";

type Props = {
    open: boolean;
    onClose: () => void;
    character: any;
};

const CharacterModal: React.FC<Props> = ({ open, onClose, character }) => {
    return (
        <Modal open={open} onClose={onClose} center closeIcon>
            {character && (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-stone-950 dark:border-gray-700 mx-auto my-8 p-4 text-center">
                    <h2 className="mb-4">{character.name}</h2>
                    {character.thumbnail && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            className="rounded-lg mx-auto"
                        />
                    )}
                    <p className="mt-4">{character.description}</p>
                </div>
            )}
        </Modal>
    );
};

export default CharacterModal;
