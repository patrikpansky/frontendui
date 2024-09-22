// field externalids
// targeting to ExternalId
// going from Facility
import { FacilityCardCapsule } from "./FacilityCardCapsule";
import { ExternalidsTable } from "../Externalid/ExternalidsTable";
export const FacilityExternalidsTableCard = ({ facility , ...props}) => {
    return (
        <FacilityCardCapsule facility={ facility } >
            <ExternalidsTable externalids={ facility?.externalids } {...props}>
            </ExternalidsTable>
        </FacilityCardCapsule>
    )
}