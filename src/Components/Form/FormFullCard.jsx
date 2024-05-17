import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';
import { Section } from './Section';
import { FormLink } from './FormLink';

const RawCard = ({form}) => {
    return (
        <CardCapsule title="JSON data">
            <JsonView data={form} shouldExpandNode={allExpanded} style={defaultStyles} />
        </CardCapsule>
    )
}

export const FormFullCard = ({form, children}) => {
    const sections = form?.sections || []
    const ordered = sections.toSorted((a, b) => (a?.order || 0) - (b?.order || 0))
    return (
        <CardCapsule  title={<>Formulář <FormLink form={form} /></>}>
            {ordered.map(
                (section, index) => <Section key={section?.id} section={section} />
            )}
        </CardCapsule>
    )
}
