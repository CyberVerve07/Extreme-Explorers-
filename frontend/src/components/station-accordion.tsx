import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProseContent } from "@/components/prose-content";
import Image from "next/image";
import { PlaceHolderImages, stationsData, stationComparisonContent } from "@/lib/data";

export function StationAccordion() {
  return (
    <div className="mt-16">
        <h2 className="font-headline text-3xl md:text-4xl mb-8 text-center text-primary">Major Research Stations</h2>
        <Accordion type="single" collapsible className="w-full">
            {stationsData.map(station => {
                 const stationImage = PlaceHolderImages.find(p => p.id === station.imageId);
                 return (
                    <AccordionItem key={station.name} value={station.name} className="border-border/50">
                        <AccordionTrigger className="text-xl hover:no-underline text-accent hover:text-accent/80 font-headline">
                            {station.name}
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                            {stationImage && (
                                <div className="my-6 rounded-lg overflow-hidden border border-border/50">
                                    <Image
                                        src={stationImage.imageUrl}
                                        alt={stationImage.description}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover"
                                        data-ai-hint={stationImage.imageHint}
                                    />
                                </div>
                            )}
                            <ProseContent content={station.content} />
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
        <ProseContent content={stationComparisonContent} className="mt-8" />
    </div>
  );
}
