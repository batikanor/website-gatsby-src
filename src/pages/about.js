import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>I'm Batıkan, I was born in 1999 in Istanbul and I welcome you to my about page.</p>
            <p>
                I'm a programmer and I enjoy programming. I enjoy all sorts of ways to observe and manipulate data.
            </p>
            <p>
                According to me, maybe the best thing about programming is how we are able to see many different levels of abstraction in use. I think it makes computer programs clear and honest, and no matter how complex, never really hard to learn. Computer Science is way different from other 'positive' sciences as we already know 'a' smallest unit with which we could explain all complexities (that is true, at least for the typical binary computers... Who knows what the future may bring) and I don't only enjoy it, but find it rightful. I think programming, as a tool, should become (if it already isn't) an essential tool for everyone to manage data of all types for all sorts of reasons, and I think it should be taught to kids before they ever set their foot on high school, so that they know how to learn and store information better.
            </p>
            <p>
                My initial wish was to become an academician in the future. But today, more and more companies are providing their employees with more freedom and therefore are not blocking their creativity, so I'm not that sure anymore. I'm open for all sorts of offers.
            </p>

            <hr/>
            <p>The rest of this page is filled with trivial information, and it isn't advised for anyone to read.</p>
            <p>Aforementioned trivial information had been removed by the author (actually commented out, which still can be read by inspecting element) due to huge amounts of cringe created by them.

//             <h2>Hobbies</h2>
//             <ul>

//                 <li>
//                     <h3>Sports</h3>
//                     <ul>
//                         <p>I'm not that competent in any of them, it just feels good to partake in such activities occasionally.</p>
//                         <li>Basketball</li>
//                         <li>Table Tennis</li>
//                         <li>Jogging in the morning and/or along the coast</li>
//                     </ul>
//                 </li>
//                 <li>
//                     <h3>Programming</h3>
//                     <p>I don't always code for profit. I enjoy sharing knowledge with my friends and building some practically useless applications just to see if I can</p>
//                 </li>
//                 <li>
//                     <h3>Computer Games</h3>
//                     <p>I like playing strategy based computer games, but lately (for at least the last 4-5 years) I almost haven't been playing any games at all. Below is a list of most of the games I've played so far. The list is unsorted and to some extent, inaccurate. Because I've probably forgotten a bunch. I don't even know why I'm putting such a list down here.</p>
//                     <ul>
//                         <li>Europa Universalis IV</li>
//                         <li>Civilization V, VI</li>
//                         <li>Team Fortress II</li>
//                         <li>Mount and Blade Warband, II Bannerlord</li>
//                         <li>Skyrim</li>
//                         <li>Minesweeper</li>
//                         <li>Solitaire</li>
//                         <li>Rocket League</li>
//                         <li>Roblox</li>
//                         <li>Minecraft</li>
//                         <li>World Of Warcraft</li>
//                         <li>Warcraft III, Frozen Throne</li>
//                         <li>Terraria</li>
//                         <li>You Have to Win the Game</li>
//                         <li>Moirai</li>
//                         <li>Online Soccer Manager</li>
//                         <li>Darkorbit</li>
//                         <li>Pro Evolution Soccer</li>
//                     </ul>
//                 </li>
//                 <li>
//                 <h3>Uncategorized / The Rest</h3>
//                     <ul>
//                         <li>
//                             <h4>Card Tricks</h4>
//                             <p>I enjoy performing simple card tricks to my friends or even to strangers (Sadly they usually assume I'm going to ask for money, so I don't do that anymore)</p>
//                             <p>I always have a couple or so decks with me and make use of them as maybe some sort of socializing tool, but what I enjoy the most is telling how the trick was done afterwards.</p>
                            
//                         </li>           
//                         <li>
//                             <h4>Mapping</h4>
//                             <p>You've probably seen a couple or so videos already, in which countries are drawn on maps and are made to
//                                 fight one another to satisfy the fantasies of a youtube channel owner. I have such a hobby aswell, although I try to keep it as realistic as I can. I've partaken in online communities where people would draw maps or create mapping videos for all sorts of reasons. There were kids forming their own fantasy nations, adults trying to document history (some of them have made quite great videos actually) and some people who want to guess things about the future but make it reasonable. I don't really belong to any of these groups but I think after I get a stable occupation for myself I may return to this old hobby of mine and maybe choose a side.   </p>                            
//                         </li>
//                         <li>
//                             <h4>Solving puzzles</h4>
//                             <p>
//                                 I enjoy solving puzzles and all other kinds of mysteries. I don't mean conventional puzzles in which one puts in physical parts together for them to form a meaningful image, but I mean more abstract variations of it.
//                                 I take geniune satisfaction from researching a topic and putting info together to reach a meaningful conclusion. It is, in a way, an addiction aswell, whilst not being an inhumane thing. It may also be occasionally harming, but lets not get into details...
//                             </p>
//                         </li> 
//                     </ul>
                    

//                 </li>
//             </ul>


            <h2>Travels</h2>
            <p>
                I don't like travelling that much, but 
                I've been in the following cities so far:
            </p>
            
            <table>
                <tr>
                    <th>City</th>
                    <th>First year of visit</th>
                    <th>Approx. time spent</th>
                </tr>
                <tr>
                    <td>Istanbul - Turkey</td>
                    <td>1999</td>
                    <td>{`>`}10 Years</td>
                </tr>
                <tr>
                    <td>Muğla - Turkey</td>
                    <td>2004</td>
                    <td>3 years</td>
                </tr>
                <tr>
                    <td>Ankara - Turkey</td>
                    <td>?</td>
                    <td>?</td>
                </tr>
                <tr>
                    <td>Bielefeld - Germany</td>
                    <td>2018</td>
                    <td>1 Month</td>
                </tr>
                <tr>
                    <td>Düsseldorf - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Münster - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Bremen - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Dortmund - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Duisburg - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Bonn - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Cologne - Germany</td>
                    <td>2018</td>
                    <td>{`<`}2 Days</td>
                </tr>
                <tr>
                    <td>Hamm - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Osnabrück - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Herford - Germany</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Aachen - Germany</td>
                    <td>2018</td>
                    <td>{`<`}2 Days</td>
                </tr>
                <tr>
                    <td>Vaals - Netherlands</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Vaals - Netherlands</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Arnhem - Netherlands</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Plombieres - Belgium</td>
                    <td>2018</td>
                    <td>{`<`}1 Day</td>
                </tr>
                <tr>
                    <td>Denizli - Turkey</td>
                    <td>2019</td>
                    <td>{`<`}1 Day</td>
                </tr>
            </table>
            <p>I may go into detail on the <Link to="/blog">blogs page</Link> later</p>
            
            
//             <h2>Politics</h2>
//             <p>I'm apolitical, or at least I choose to seem that way to avoid any sorts of bias or offensive behaviour I may face. (I don't have that radical of a mind or that hated of a sight or personality, but still, I think this is for the greater good) That is also the reason why I haven't put my photo or such personal details on my cv.</p>
            <hr/>
            
            <p>If you wish to acquire more info about me, check <Link to="/cv">My CV</Link> out! </p>
            
        </Layout>
        )
}
export default AboutPage
