"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: { name: string; role: string; comment: string }) => void;
}

export const CommentModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const t = useTranslations();
  const [newComment, setNewComment] = useState({
    name: "",
    role: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(newComment);
    setNewComment({ name: "", role: "", comment: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-darkMode p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-bold dark:text-white ">{t("comments.modal-title")}</h3>
        <p className="text-primary font-base text-center">
          {t("comments.modal-description")}
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">{t("label.name")}</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={t("placeholder.name")}
              value={newComment.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="role">{t("label.role")}</label>
            <input
              type="text"
              name="role"
              id="role"
              placeholder={t("placeholder.role")}
              value={newComment.role}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="comment">{t("label.message")}</label>
            <textarea
              name="comment"
              id="comment"
              placeholder={t("placeholder.message")}
              value={newComment.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              required
            />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-5 justify-between">
            <button
              onClick={onClose}
              className="w-full bg-gray-300 text-white font-medium capitalize px-4 py-1 rounded-lg"
            >
              {t("button.cancel")}
            </button>
            <button
              type="submit"
              className="w-full bg-lavender text-white font-medium capitalize px-4 py-1 rounded-lg"
            >
              {t("button.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
