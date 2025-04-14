import React, { useState, useContext } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import myContext from '../../../context/data/myContext';
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

function CreateBlog() {
    const context = useContext(myContext);
    const { mode } = context;

    const [blogs, setBlogs] = useState({
        title: '',
        category: '',
        content: '',
    });
    const [thumbnail, setthumbnail] = useState();

    const addPost = async () => {
        if (blogs.title === "" || blogs.category === "" || blogs.content === "" || !thumbnail) {
            toast.error('Please Fill All Fields');
        }
        uploadImage();
    };

    // Create markup function
    function createMarkup(c) {
        return { __html: c };
    }

    return (
        <div className='container mx-auto max-w-5xl py-8'>
            {/* Header Section */}
            <div className="p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg mb-8">
                {/* Top Navigation */}
                <div className="mb-4 flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <Link to={'/dashboard'}>
                            <BsFillArrowLeftCircleFill size={25} className="text-white transition-all hover:scale-110" />
                        </Link>
                        <Typography variant="h4" className={`font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Create Blog
                        </Typography>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 transition-all duration-300"
                style={{
                    background: mode === 'dark' ? '#2D2D2D' : 'rgb(245, 245, 245)',
                }}>
                {/* Thumbnail Section */}
                <div className="mb-5">
                    {thumbnail && <img className="w-full rounded-md mb-4" src={thumbnail ? URL.createObjectURL(thumbnail) : ""} alt="thumbnail" />}
                    <Typography variant="small" color="blue-gray" className="mb-2 font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                        Upload Thumbnail
                    </Typography>
                    <input
                        type="file"
                        className="w-full rounded-md p-3 border-2 border-gray-300 bg-transparent transition-all duration-200 hover:border-indigo-500"
                        style={{
                            background: mode === 'dark' ? '#444' : 'rgb(245, 245, 245)',
                            color: mode === 'dark' ? 'white' : 'black',
                        }}
                        onChange={(e) => setthumbnail(e.target.files[0])}
                    />
                </div>

                {/* Title Input */}
                <div className="mb-5">
                    <input
                        type="text"
                        className={`w-full rounded-md p-3 border-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="Enter Your Title"
                        style={{
                            background: mode === 'dark' ? '#444' : 'rgb(245, 245, 245)',
                            color: mode === 'dark' ? 'white' : 'black',
                        }}
                        name="title"
                        onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
                    />
                </div>

                {/* Category Input */}
                <div className="mb-5">
                    <input
                        type="text"
                        className={`w-full rounded-md p-3 border-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                        placeholder="Enter Your Category"
                        style={{
                            background: mode === 'dark' ? '#444' : 'rgb(245, 245, 245)',
                            color: mode === 'dark' ? 'white' : 'black',
                        }}
                        name="category"
                        onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
                    />
                </div>

                {/* TinyMCE Editor */}
                <Editor
                    apiKey='6rh7x7hwct6hc0x0b188p7asp1t64jlp7905x6b3f341awca'
                    onEditorChange={(newValue) => {
                        setBlogs({ ...blogs, content: newValue });
                    }}
                    init={{
                        plugins: 'a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount',
                        height: 400,
                        menubar: false,
                        toolbar: 'undo redo | formatselect | bold italic underline | alignleft aligncenter alignright | link image | code',
                        content_style: `
                            body { font-family: 'Arial', sans-serif; }
                            h1 { color: ${mode === 'dark' ? '#FF4D4D' : '#000'}; }
                            h2 { color: ${mode === 'dark' ? '#FF4D4D' : '#000'}; }
                            p { color: ${mode === 'dark' ? '#7efff5' : '#333'}; }
                            `,
                    }}
                />

                {/* Submit Button */}
                <Button
                    className="w-full mt-6 py-3 rounded-lg text-white font-semibold hover:bg-indigo-600 transition-all duration-200"
                    style={{
                        background: mode === 'dark' ? '#6A4CFF' : '#1E3A8A',
                    }}
                    onClick={addPost}
                >
                    Publish Blog
                </Button>
            </div>

            {/* Preview Section */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Blog Preview</h2>
                <div
                    className={`preview-content ${mode === 'dark' ? 'text-white' : 'text-black'}`}
                    dangerouslySetInnerHTML={createMarkup(blogs.content)}
                />
            </div>
        </div>
    );
}

export default CreateBlog;
