import React, { useEffect } from 'react';

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // Check if script is already added to prevent duplicates
    if (document.getElementById('google-translate-script')) return;

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Define the global callback function
    // @ts-ignore
    window.googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        { 
          pageLanguage: 'en', 
          includedLanguages: 'en,zh-CN,zh-TW', // English, Chinese Simplified, Chinese Traditional
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="translate-wrapper">
      <div id="google_translate_element"></div>
      <style>{`
        /* Hide the Google Top Bar */
        .goog-te-banner-frame { display: none !important; }
        body { top: 0px !important; }
        
        /* Style the dropdown button to look cleaner */
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: none !important;
          padding: 0 !important;
          font-size: 10px !important;
        }
        .goog-te-gadget-simple span {
          color: #64748b !important; /* matches slate-500 */
          font-weight: bold !important;
        }
        .goog-te-gadget-icon {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
