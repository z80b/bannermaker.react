import React from 'react';
import Fieldset from '@components/fieldset.jsx';
import SingleInput from '@components/single-input.jsx';
import TextArea from '@components/text-area.jsx';

const SettingsField = (props) => (
    <div className="bm-settings">
        <Fieldset title="Заголовок" className="bm-settings__fieldset">
            <TextArea
                name="title"
                label=""
                defaultValue={ props.title }
                onChange={ props.handleChange }/>
        </Fieldset>
        <Fieldset title="Подзаголовок" className="bm-settings__fieldset">
            <TextArea
                name="description"
                label=""
                defaultValue={ props.description }
                onChange={ props.handleChange }/>
        </Fieldset>
        <Fieldset title="Текст под знаком вопроса (?)." className="bm-settings__fieldset">
            <TextArea
                name="conditions"
                label=""
                defaultValue={ props.conditions }
                onChange={ props.handleChange }/>
        </Fieldset>
        <Fieldset title="Промокод" className="bm-settings__fieldset">
            <SingleInput
                name="promocode"
                type="text"
                label=""
                defaultValue={ props.promocode }
                onChange={ props.handleChange }/>
        </Fieldset>
        <Fieldset title="Цвета баннера" className="bm-settings__fieldset">
            <SingleInput
                name="bg"
                type="text"
                label="Фон"
                defaultValue={ props.bg }
                onChange={ props.handleChange }/>
            <SingleInput
                name="color"
                type="text"
                label="Цвет текста"
                defaultValue={ props.color }
                onChange={ props.handleChange }/>
        </Fieldset>
        
        <button
            onClick={ props.downloadClick }
            className="btn btn-success btn-md b-markup-button">Получить верстку</button>
    </div>
)

export default SettingsField