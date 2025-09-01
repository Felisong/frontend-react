"use client";

export default function SheepPage() {
  return (
    <>
      <h1 className="font-header text-center mx-8 my-4 2xl:text-5xl 2xl:my-16">
        Sheep Game
      </h1>
      <div className="flex gap-20 mx-8">
        <iframe
          width={900}
          height={650}
          src="https://editor.p5js.org/Felisong/full/Wi9UpNk7L"
        ></iframe>
        <div>
          <h2>1 day Sheep Game</h2>
          <p>To play, move with wasd and bress b to baa</p>
          <hr />
          <br />

          <p>
            I made this in one day using p5.js. Was just a fun little experiment
            to test it and see how it works. I had fun, and thought I would add
            a page here to mention it. hidden away.
          </p>
        </div>
      </div>
    </>
  );
}
