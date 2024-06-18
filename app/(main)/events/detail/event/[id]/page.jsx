import React from 'react';
import Image from 'next/image';
import eventDetailImage from '../../../../../../assets/img/event_detail_image_1.png';
import ChatButton from '@/components/buttons/chat-button';
import { Rupiah, showFormattedDate } from '@/utils';
import { supabase } from '@/utils/conections/supabase';

export const revalidate = 100; // revalidate the data at most every hour

async function getData(id) {
  const res = await supabase
    .from('tbl_event')
    .select(
      'id,title,capacity,description,start_date,end_date,location,budget,user_id(*),picture,is_show,created_at'
    )
    .eq('id', id)
    .single();

  return res.data;
}

export default async function Detail({ params: { id } }) {
  const event = await getData(id);

  console.log(event);
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="event__detail flex flex-col w-11/12 mt-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Detail</a>
            </li>
            <li>
              <a>{event.title}</a>
            </li>
          </ul>
        </div>
        <div className="event__detail_content mt-5">
          <Image
            src={
              'https://vlljvshssngonqwagiho.supabase.co/storage/v1/object/public/' +
              event.picture
            }
            alt={event.title}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded w-full max-h-[480px] object-cover"
          />
          <h1 className="event_detail_title mt-10 text-3xl text-gray-900 font-bold">
            {event.title}
          </h1>
          <p className="event__detail_date mt-3">
            Tanggal: {showFormattedDate(event.start_date)} - {showFormattedDate(event.end_date)}
          </p>
          <p className="event__detail_capacity mt-3">
            Kapasistas: {event.capacity}
          </p>
          <p className="event__detail_location mt-3">
            Lokasi: {event.location}
          </p>
          <div className="event__detai_description mt-5">
            <p className="text-base font-semibold">Deskripsi :</p>
            <p className="mt-2.5 w-9/12">{event.description} </p>
          </div>

          <div className="event__detail_budget  mt-5">
            <p className="text-base font-semibold">Budget :</p>
            <p> {Rupiah.format(event.budget)}</p>
          </div>
        </div>
        <div className="event_detail_chat flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 my-10">
          <div className="event__detail_chat_owner flex items-center">
            <ChatButton type={'0'} text={'Chat sebagai Event Organizer'} number={event.user_id.phone_number} message={"Hai saya tertarik dengan event " + event.title + " saya dari penyedia layanan "} />
          </div>
          <div className="event__detail_chat_sponsor">
            <ChatButton type={'1'} text={'Chat sebagai Sponsor'} number={event.user_id.phone_number} message={"Hai saya tertarik dengan event " + event.title + " saya dari pihak sponsor "} />
          </div>
        </div>
      </div>
    </div>
  );
}
