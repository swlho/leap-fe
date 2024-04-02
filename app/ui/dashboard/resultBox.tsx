import { TypeAnimation } from "react-type-animation"

type Props = {
    result:any;
}

export default function ResultBox ({result}:Props) {
    return (
    <>
    <div>
        <TypeAnimation
        sequence={[`${result}`]}
        omitDeletionAnimation={true}
        speed={125}
        wrapper='p'
        className='result-text'
        />
    </div>
    <div>
        {/* <PondPreviewCard/> */}
    </div>
    </>
        )
}