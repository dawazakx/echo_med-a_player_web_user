// components/FormHeader.tsx

import React from 'react';
import Link from 'next/link';

interface FormHeaderProps {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, description, linkText, linkHref }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      {linkText && linkHref && (
        <p className="mt-4 text-sm text-gray-600">
          {linkText}{' '}
          <Link href={linkHref}>
            <a className="text-blue-600 hover:underline">Click here</a>
          </Link>
        </p>
      )}
    </div>
  );
};

export default FormHeader;
