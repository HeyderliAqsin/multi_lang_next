import useTranslation from 'next-translate/useTranslation';
import React from 'react'

const about = () => {
    const {t}=useTranslation();
  return (
    <div>
        <h1>{t("about:title")}</h1>
    </div>
  )
}

export default about