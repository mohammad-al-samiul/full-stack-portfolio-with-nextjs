/* eslint-disable prettier/prettier */
"use client";

import JoditEditor, { IJoditEditorProps, Jodit } from "jodit-react";
import React, { useMemo, useRef, useState } from "react";

import "./page.css";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button } from "@nextui-org/button";

import FXSelect from "@/src/components/form/FXSelect";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";

const techStack = [
  {
    key: "javacript",
    label: "Javascript",
  },
  {
    key: "react",
    label: "React",
  },
  {
    key: "nodeJs",
    label: "NodeJs",
  },
  {
    key: "expressJs",
    label: "ExpressJs",
  },
  {
    key: "mongodb",
    label: "MongoDb",
  },
  {
    key: "nextJs",
    label: "NextJs",
  },
  {
    key: "typescript",
    label: "Typescript",
  },
  {
    key: "redux",
    label: "Redux",
  },
  {
    key: "PostgreSQL",
    label: "PostgreSQL",
  },
  {
    key: "docker",
    label: "Docker",
  },
];

export default function CreateBlog() {
  const [value, setValue] = useState<string>("");
  // const [postData, setPostData] = useState("");

  //console.log(value);

  const editorRef = useRef<Jodit | null>(null);

  const config: IJoditEditorProps["config"] = useMemo(() => {
    return {
      readonly: false,
      placeholder: "Start writing your blog...",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "div",
      buttons: [
        "bold",
        "italic",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "|",
        "outdent",
        "indent",
        "align",
        "|",
        "hr",
        "|",
        "fullsize",
        "brush",
        "|",
        "table",
        "link",
        "image",
        "|",
        "undo",
        "redo",
      ],
      uploader: {
        insertImageAsBase64URI: true, // Simplifies handling by encoding image as base64
      },
      statusbar: false,
      toolbarAdaptive: false,
    };
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      content: value,
    };

    console.log(postData);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
        <div dangerouslySetInnerHTML={{ __html: value }} />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Create a Blog
        </h1>
        <JoditEditor
          ref={editorRef}
          config={config}
          value={value}
          onChange={(htmlString: string) => setValue(htmlString)}
        />
        <FXForm onSubmit={onSubmit}>
          <div className="flex mt-2 ">
            <div className="w-1/2 pr-2">
              <FXInput label="Title" name="title" />
            </div>
            <div className="w-1/2">
              <FXSelect label="Category" name="category" options={techStack} />
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <Button className="text-default-800" type="submit">
              Post
            </Button>
          </div>
        </FXForm>
      </div>
    </div>
  );
}
