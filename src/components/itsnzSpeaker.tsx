import { ItsnzSpeaker as SpeakerType } from "client";
import styles from "scss/pages/posts.module.scss";
import Image from "next/image";

interface SpeakerProps {
  speaker: SpeakerType;
}

export default function Speaker({ speaker }: SpeakerProps) {
  return (
    <div>
      <img
        className="image"
        src={speaker?.speakerImage.mediaItemUrl}
        alt={speaker?.speakerImage.altText}
        width={400}
        height={400}
      />

      <h2>{speaker?.speakerName}</h2>
      <p>{speaker?.speakerRole}</p>

      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: speaker?.speakerBio }}
      ></div>
    </div>
  );
}
