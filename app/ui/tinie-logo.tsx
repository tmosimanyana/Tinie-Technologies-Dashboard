import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './fonts';

export default function TinieLogo() {
  return (
    <div className={`${lusitana.className} flex items-center gap-2 text-white`}>
      <GlobeAltIcon className="h-10 w-10 rotate-[15deg]" />
      <p className="text-[32px]">Tinie Technologies</p>
    </div>
  );
}