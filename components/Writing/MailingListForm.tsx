"use client";

import { FormEvent, useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MailingListForm = () => {
    const [message, setMessage] = useState<string>();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const canSubmit = Boolean(firstName.trim() && email.trim());

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setMessage(undefined);

        if (!emailPattern.test(email.trim())) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/mailing-list", {
                method: "POST",
                body: new FormData(form),
            });
            const result = await response.json();
            setMessage(result.error || result.success);

            if (result.success) {
                form.reset();
                setFirstName("");
                setEmail("");
            }
        } catch {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 italic">Want to hear when I write something new?</p>
            <form className="mt-1 -mx-2 flex w-full flex-col gap-4 p-2 sm:flex-row sm:items-center" noValidate onSubmit={handleSubmit}>
                <input
                    aria-label="Preferred name"
                    autoComplete="given-name"
                    className="w-full rounded-sm border-0 border-b border-gray-400 bg-transparent px-0 py-2 outline-none focus:border-indigo-600 sm:flex-1 dark:border-gray-500 dark:focus:border-indigo-400"
                    id="mailing-list-first-name"
                    name="name"
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="What should I call you?"
                />
                <input
                    aria-label="Email"
                    autoComplete="email"
                    className="w-full rounded-sm border-0 border-b border-gray-400 bg-transparent px-0 py-2 outline-none focus:border-indigo-600 sm:flex-1 dark:border-gray-500 dark:focus:border-indigo-400"
                    id="mailing-list-email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="me@email.com"
                    type="email"
                />
                <button
                    className={canSubmit
                        ? "self-start rounded-sm border border-black bg-black px-4 py-2 text-white transition hover:opacity-80 sm:self-auto dark:border-white dark:bg-white dark:text-black"
                        : "self-start rounded-sm border border-gray-300 px-4 py-2 text-gray-400 sm:self-auto dark:border-gray-600 dark:text-gray-500"}
                    disabled={!canSubmit || isSubmitting}
                    type="submit"
                >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                </button>
            </form>
            <div className="mt-4 min-h-[1.5rem]">
                {message && (
                    <p aria-live="polite" className="text-sm text-gray-600 dark:text-gray-300">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default MailingListForm;
