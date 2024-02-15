import './Avatar.css'

interface AvatarProps {
    letter: string;
}
export const Avatar = ({ letter }: AvatarProps) => {
    return (
        <div id="avatar__alphas">
            {letter}
        </div>
    )
}