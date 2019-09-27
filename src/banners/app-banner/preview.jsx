import React from 'react';

const PreviewField = (props) => (
    <div className="bm-page__preview">
        <div className="banner-viewport">

            <section className="app-banner" style={{background: props.bg}}>
                {props.title != '' && (<h3 className="app-banner__title" style={{ color: props.color }} dangerouslySetInnerHTML={{ __html: `<b>${props.title}</b> ${props.conditions != '' ? `<a class="app-banner__conditions-button" style="color: ${props.color}; border-color: ${props.color}" ignore_bs_link="true" href="?conditions=">?</a>`:``}` }}  />)}

                {props.description != '' && (<p className="app-banner__description" style={{ color: props.color }} dangerouslySetInnerHTML={{ __html: props.description }} />)}

                {props.promocode != '' && (
                    <a className="app-banner-promocode" href={'/?pc='+props.promocode}>
                        <span className="app-banner-promocode__promo">Промокод: </span>
                        <span className="app-banner-promocode__code"><b>{props.promocode}</b></span>
                    </a>
                )}

                {props.conditions != '' && (<div className="app-banner__conditions">{props.conditions}</div>)}
            </section>

        </div>
    </div>
);

export default PreviewField;