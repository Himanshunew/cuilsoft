'use client';
import Image from "next/image";
import React, { useState } from "react";

const users = [
  {
    id: 1,
    name: "Sarah",
    image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.",
  },
  {
    id: 2,
    name: "Mike",
    image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence2.",
  },
  {
    id: 3,
    name: "Anna",
   image: "/image/personblue.png",
      review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence3.",
  },
  {
    id: 4,
    name: "David",
   image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence2.",
  },
  {
    id: 5,
    name: "Emily",
  image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.1",
  },
   {
    id: 6,
    name: "Emily",
  image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.1",
  },
   {
    id: 7,
    name: "Emily",
  image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.1",
  },
   {
    id: 8,
    name: "Emily",
  image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.1",
  },
   {
    id: 9,
    name: "Emily",
  image: "/image/personblue.png",
    review: "Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence.1",
  },
];

export default function TestimonialSelector() {
  const [selectedUser, setSelectedUser] = useState(users[0]);

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      <p className="text-center max-w-2xl text-gray-700 text-[16px]">{selectedUser.review}</p>

  <div className="flex flex-wrap justify-center">
  {users.map((user, index) => {
    const marginTops = ['mt-1', '-mt-2', 'mt-3', 'mt-0', '-mt-1'];
    const randomMargin = marginTops[index % marginTops.length];

    return (
      <div key={user.id} className={`w-1/6 flex justify-center ${randomMargin}`}>
      <Image
  src={user.image}
  alt={user.name}
  className={`w-[85px] h-[85px] rounded-full cursor-pointer border-4 transition-all
    ${selectedUser.id === user.id ? "border-blue-500" : "border-transparent"}
  `}
width={100}
height={100}
          onClick={() => setSelectedUser(user)}
        />
      </div>
    );
  })}
</div>

    </div>
  );
}
