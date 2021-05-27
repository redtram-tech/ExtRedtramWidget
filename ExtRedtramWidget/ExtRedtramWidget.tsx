import * as React from 'react';
import { ExtEmbed } from '../ExtEmbed/ExtEmbed';

interface IProps {
    'data-blockid': number;
    'data-ver' : string;
    'data-width'?: string;
    'data-height'?: string;
}

export function ExtRedtramWidget(props: IProps): React.ReactNode {
    const {
        'data-blockid': blockId,
        'data-ver': ver,
        'data-width': width = '100%',
        'data-height': height = '350'
    } = props;

    const html = `<div class="r${Number(blockId)}" id="abba" idn="${Number(blockId)}"></div>` +
        `<script async src="https://${String(ver)}.redtram.com/j/${Number(blockId)}/"></script>`;


    return (
        <div>
            <ExtEmbed
                html={html}
                iframeHeight={height}
                iframeWidth={width}
            />
        </div>
    );
}
