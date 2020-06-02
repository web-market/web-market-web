import React, { useEffect } from 'react';

import tinymce from 'tinymce';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/advlist/plugin.min';
import 'tinymce/plugins/autolink/plugin.min';
import 'tinymce/plugins/lists/plugin.min';
import 'tinymce/plugins/link/plugin.min';
import 'tinymce/plugins/image/plugin.min';
import 'tinymce/plugins/charmap/plugin.min';
import 'tinymce/plugins/print/plugin.min';
import 'tinymce/plugins/preview/plugin.min';
import 'tinymce/plugins/anchor/plugin.min';
import 'tinymce/plugins/searchreplace/plugin.min';
import 'tinymce/plugins/visualblocks/plugin.min';
import 'tinymce/plugins/code/plugin.min';
import 'tinymce/plugins/fullscreen/plugin.min';
import 'tinymce/plugins/insertdatetime/plugin.min';
import 'tinymce/plugins/media/plugin.min';
import 'tinymce/plugins/table/plugin.min';
import 'tinymce/plugins/paste/plugin.min';
import 'tinymce/plugins/help/plugin.min';
import 'tinymce/plugins/wordcount/plugin.min';
import 'tinymce/icons/default/icons.min';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import { isNullOrUndefined } from '../../utils';

const tinyInit = (height, changeHandler) => {
	tinymce.init({
		selector: 'textarea#tiny-editor',
		height,
		document_base_url: '/src/baseComponents/TextEditor',
		menubar: false,
		resize: false,
		skin: false,
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code fullscreen',
			'insertdatetime media table paste code help wordcount'
		],
		toolbar: 'undo redo | formatselect | ' +
			'bold italic backcolor | alignleft aligncenter ' +
			'alignright alignjustify | bullist numlist outdent indent | ' +
			'removeformat | help',
		content_css: [
			'skins/content.min.css'
		],
		setup: editor => {
			editor.on('keyup', e => changeHandler(e));
		}
	});
};

const TextEditor = (
	{
		height,
		onFieldChange
	}
) => {
	const changeHandler = (e) => {
		if (!isNullOrUndefined(e.currentTarget)) {
			onFieldChange(e.currentTarget.innerHTML);
		}
	};

	useEffect(() => {
		tinyInit(height, changeHandler);
	}, []);

	return (
		<div style={{ height: height + 60 }}>
			<textarea
				id="tiny-editor"
			/>
		</div>
	);
};

TextEditor.defaultProps = {
	height: 300
};

export { TextEditor };
