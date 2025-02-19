import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

//Methods
void main() {
  runApp(const MyApp());
}

//VAriables 
bool _isShow = false; 
bool _isShowPlanks = false; 
bool _isShowSticks = false; 
bool _isShowChests = false; 
bool _isShowStairs = false; 



class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Design To Spec',
      debugShowCheckedModeBanner: false,//removes debug banner 
      theme: ThemeData(
        fontFamily: 'Dogica',
        elevatedButtonTheme: 
        ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.grey, 
          ),
        )
      ),
     
      home: const MyHomePage(
        title: 'Trees and Woods',
      ),
      
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
        backgroundColor: const Color(0xFF686868),
        leadingWidth: 50,
        
        //Picaxe Icon 
       
        leading:  Padding(
          padding: const EdgeInsets.only(left: 20),
            child: SvgPicture.asset(
            'assets/images/pickaxe.svg',
            placeholderBuilder: (context) => const CircularProgressIndicator(),
            height: 6.0,
            width: 6.0,
            fit: BoxFit.contain,
            color: Colors.white,
          ),
        ), 
        //About Button 
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.account_circle),
            tooltip: 'About',
            color: Colors.black,
            onPressed: () {
              setState(
                () {
                  _isShow = !_isShow; 
                }, 
              );
            },
          )
        ],

      ),


      body: Stack(
        children: [
          //Background Image 
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/valley.jpg'), 
                fit: BoxFit.fill
              ) 
            ),
          ), 
           
          //App Content 
          SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [

                //Oak Tree 
                Container(
                  height: 400,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      begin: Alignment.bottomRight,
                      end: Alignment.bottomLeft,
                      colors: [
                        Color(0xFF244D3E),
                        Color(0xFFE8FDF5)
                      ]
                    ),
                    image: const DecorationImage(
                      image: AssetImage('assets/images/oaktree.png'),
                    ),
                    border: Border.all(width: 6, color: Colors.white), 
                  ),
                 

                
                
                ),
                //Oak Tree Description 
                Container(
                  color: const Color(0xFF686868),
                  padding: const EdgeInsets.all(10),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text(
                        'The Oak Tree',
                        textAlign: TextAlign.right,
                        style: TextStyle(color: Colors.white, fontSize: 20)
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      
                      //Paragraph 1
                      Text(
                        'Lorem ipsum dolor sit amet. Id provident illo est modi doloribus sit ipsum sunt et harum quasi et fugit Quis et dignissimos molestiae. Et molestias iste vel quaerat galisum eos omnis voluptatem ut totam consequatur. ',
                        textAlign: TextAlign.left,
                        style: TextStyle(color: Colors.white, fontFamily: 'Roboto'),

                      ),
                      SizedBox(
                        height: 10,
                      ),

                      //Paragraph 2
                      Text(
                        'Lorem ipsum dolor sit amet. Ex sapiente asperiores ut corporis quaerat vel vitae saepe aut modi cumque est ratione corporis aut unde velit. Id sequi atque non quos excepturi ea illum atque ex distinctio voluptatum ut quia quia hic eius omnis! Quo obcaecati alias qui doloribus distinctio et rerum ullam aut tenetur quos aut recusandae quia. ',
                        style: TextStyle(color: Colors.white, fontFamily: 'Roboto'),

                      ),
                       SizedBox(
                        height: 10,
                      ),

                      //Paragraph 3
                      Text(
                        'Sed voluptas voluptatem et dignissimos necessitatibus At suscipit totam aut doloribus voluptate non veritatis asperiores cum aliquam odit et omnis rerum. Qui quis consequatur quo quia libero sed molestiae sint rem nobis voluptates non quas quasi. Qui beatae reiciendis sed aliquid enim cum ipsum quaerat eum facilis aliquam aut quasi quasi eos rerum neque qui autem repellendus. Et dolorum accusamus eos dolores sint ut vitae quidem. Ut dolorem quidem sed eius perspiciatis.',
                        style: TextStyle(color: Colors.white, fontFamily: 'Roboto'),
                      ),
                       SizedBox(
                        height: 10,
                      ),
                    ],
                  )
                ),
                const SizedBox(height: 
                  400
                ),
                
                //Items Description 
                Container(
                  color: const Color(0xFF35363D),
                  child: Column(
                    children: [
                      const SizedBox(
                        height: 20
                      ),
                      
                      //Planks 
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                          
                        children: [
                           //Plank container 
                          Container(
                              height: 170,
                              width: 170,
                              alignment: Alignment.topCenter,
                              decoration: BoxDecoration(
                              color: const Color(0xFF244D3E),
                                border: Border.all(width: 6, color: Colors.white)
                            ),

                            child:  GestureDetector(
                            onTap: () {
                              setState(
                                () {
                                  _isShowPlanks = !_isShowPlanks; 
                              });


                            },
                             //Plank png 
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Container(
                                    height: 100,
                                    width: 100,
                                    alignment: Alignment.bottomCenter,//controls text 
                                    decoration: const BoxDecoration(
                                      image: DecorationImage(
                                        image: AssetImage('assets/images/planks.png'),//
                                      ),
                                      
                                    ),
                                    child: const Align(
                                        alignment: Alignment(0.1,-1.6),
                                        child: Text('Planks', 
                                        style: TextStyle(color: Colors.white, fontFamily: 'Body'),
                                        ),
                                    ),
                                  ),
                                  

                                ],
                              )
                          
                          ), 

                              
                             
                          
                          ),

                         
                          //Plank Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 170,
                            color: const Color(0xFF686868),

                            child: const Expanded(
                              child: SingleChildScrollView(
                                scrollDirection: Axis.vertical,
                                child: Text(
                                'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                               style: TextStyle(
                                color: Colors.white, 
                                fontFamily: 'Body',

                              ),
                              ),
                              )
                            ),
                          ),

                        ],
                      ),
                      const SizedBox(
                        height: 20
                      ),
                      
                      //Sticks 
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                          
                        children: [
                           //Sticks container 
                          Container(
                              height: 170,
                              width: 170,
                              alignment: Alignment.topCenter,
                              decoration: BoxDecoration(
                              color: const Color(0xFF244D3E),
                                border: Border.all(width: 6, color: Colors.white)
                            ),

                            child:  GestureDetector(
                            onTap: () {
                              setState(
                                () {
                                  _isShowSticks = !_isShowSticks; 
                              });


                            },
                             //Sticks png 
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Container(
                                    height: 100,
                                    width: 100,
                                    alignment: Alignment.bottomCenter,//controls text 
                                    decoration: const BoxDecoration(
                                      image: DecorationImage(
                                        image: AssetImage('assets/images/stick.png'),//
                                      ),
                                      
                                    ),
                                    child: const Align(
                                        alignment: Alignment(0.1,-1.6),
                                        child: Text('Sticks', 
                                        style: TextStyle(color: Colors.white, fontFamily: 'Body'),
                                        ),
                                    ),
                                  ),
                                  

                                ],
                              )
                          
                          ), 

                              
                             
                          
                          ),

                         
                          //Stick Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 170,
                            color: const Color(0xFF686868),

                            child: const Expanded(
                              child: SingleChildScrollView(
                                scrollDirection: Axis.vertical,
                                child: Text(
                                'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                               style: TextStyle(
                                color: Colors.white, 
                                fontFamily: 'Body',

                              ),
                              ),
                              )
                            ),
                          ),

                        ],
                      ),
                      const SizedBox(
                        height: 20
                      ),
                      
                      //Chests
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                          
                        children: [
                           //Plank container 
                          Container(
                              height: 170,
                              width: 170,
                              alignment: Alignment.topCenter,
                              decoration: BoxDecoration(
                              color: const Color(0xFF244D3E),
                                border: Border.all(width: 6, color: Colors.white)
                            ),

                            child:  GestureDetector(
                            onTap: () {
                              setState(
                                () {
                                  _isShowChests = !_isShowChests; 
                              });


                            },
                             //Chest png 
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Container(
                                    height: 100,
                                    width: 100,
                                    alignment: Alignment.bottomCenter,//controls text 
                                    decoration: const BoxDecoration(
                                      image: DecorationImage(
                                        image: AssetImage('assets/images/chest.png'),//
                                      ),
                                      
                                    ),
                                    child: const Align(
                                        alignment: Alignment(0.1,-1.6),
                                        child: Text('Chests', 
                                        style: TextStyle(color: Colors.white, fontFamily: 'Body'),
                                        ),
                                    ),
                                  ),
                                  

                                ],
                              )
                          
                          ), 

                              
                             
                          
                          ),

                         
                          //Plank Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 170,
                            color: const Color(0xFF686868),

                            child: const Expanded(
                              child: SingleChildScrollView(
                                scrollDirection: Axis.vertical,
                                child: Text(
                                'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                               style: TextStyle(
                                color: Colors.white, 
                                fontFamily: 'Body',

                              ),
                              ),
                              )
                            ),
                          ),

                        ],
                      ),
                      const SizedBox(
                        height: 20
                      ),
                      
                      //Stairs
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                          
                        children: [
                           //Plank container 
                          Container(
                              height: 170,
                              width: 170,
                              alignment: Alignment.topCenter,
                              decoration: BoxDecoration(
                              color: const Color(0xFF244D3E),
                                border: Border.all(width: 6, color: Colors.white)
                            ),

                            child:  GestureDetector(
                            onTap: () {
                              setState(
                                () {
                                  _isShowStairs = !_isShowStairs; 
                              });


                            },
                             //Stairs png 
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Container(
                                    height: 100,
                                    width: 100,
                                    alignment: Alignment.bottomCenter,//controls text 
                                    decoration: const BoxDecoration(
                                      image: DecorationImage(
                                        image: AssetImage('assets/images/stairs.png'),//
                                      ),
                                      
                                    ),
                                    child: const Align(
                                        alignment: Alignment(0.1,-1.6),
                                        child: Text('Stairs', 
                                        style: TextStyle(color: Colors.white, fontFamily: 'Body'),
                                        ),
                                    ),
                                  ),
                                  

                                ],
                              )
                          
                          ), 

                              
                             
                          
                          ),

                         
                          //Plank Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 170,
                            color: const Color(0xFF686868),

                            child: const Expanded(
                              child: SingleChildScrollView(
                                scrollDirection: Axis.vertical,
                                child: Text(
                                'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                               style: TextStyle(
                                color: Colors.white, 
                                fontFamily: 'Body',

                              ),
                              ),
                              )
                            ),
                          ),

                        ],
                      ),
                      const SizedBox(
                        height: 20
                      ),
                      
                    ],
                  ),

                ),
              
                //Footer 
                Container(
                  height: 350,
                  decoration: const BoxDecoration(
                    border: Border(
                      top: BorderSide(width: 13, color: Colors.white)
                    ),
                    
                    image: DecorationImage(
                      image: AssetImage('assets/images/trees.jpg'), 
                      
                      fit: BoxFit.cover
                    )
                  ),
                  
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: const [
                      Align(
                        alignment: Alignment.topCenter,
                        child: Text('Trees are pretty cool.\nRight?', 
                          style: TextStyle(color: Colors.white),
                          textAlign: TextAlign.center,
                        ),
                      ),

                      SizedBox(
                        height: 240
                      ),
                      
                      //Copyright message 
                      Align(
                        child: Text('Copyright 2022\nRIT School of Interactive Games\nand Media', 
                          style: TextStyle(color: Colors.white),
                          textAlign: TextAlign.center,
                        ),
                      ),


                    ],
                  )
                ), 
              ],
            ),
          ),
        
          //Plank
          Align(
            alignment: Alignment.center,
            child: Visibility(
              visible: _isShowPlanks,
              child: Container(
              width: 300,
              height: 725,
              margin: const EdgeInsets.only(top: 10, bottom: 10), 
              padding: const EdgeInsets.all(20),
              color: const Color(0xFF686868),
              child: Column(
                children: [

                  //Plank Tag 
                  const Align( 
                    alignment: Alignment.topLeft,
                    child: Text(
                    'Planks', 
                    style: TextStyle(fontFamily: 'Body', color: Colors.white, fontSize: 15),
                    ),  
                  ), 

                  const SizedBox(height: 20,), 
                  
                  //Plank container 
                  Container(
                      width: 260,
                      alignment: Alignment.topCenter,
                      decoration: BoxDecoration(
                        color: const Color(0xFF244D3E),
                        border: Border.all(width: 6, color: Colors.white)
                      ),
                        
                        //Plank png 

                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [

                          //Plank Image 
                          Container(
                            height: 250,
                            width: 150,
                            alignment: Alignment.bottomCenter,//controls text 
                            decoration: const BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage('assets/images/planks.png'),//
                              ),
                              
                            ),
                          
                          ),


                          //Plank Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 250,
                            color: Colors.white,
                            child: Column(
                              children: const [
                                Expanded(
                                  child: SingleChildScrollView(
                                      scrollDirection: Axis.vertical,
                                      child: Text(
                                      'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                                        style: TextStyle(
                                        color: Colors.black, 
                                        fontFamily: 'Body',
                                      ),
                                    ),
                                  )
                                ),

                                
                              ],
                            )

                            
                            
                          ),
                        ],
                      )
                      
                    ),
                  const SizedBox(height: 30,), 

                  //Close Button 
                  Align(
                      alignment: const Alignment(1.1,0.0),
                      child: ElevatedButton(
                        onPressed: () {
                          setState(
                            () {
                              _isShowPlanks = !_isShowPlanks; 
                            },
                          );
                        }, 
                        child: const Text(
                          'Close', 
                          style: TextStyle(fontFamily: 'body'),
                        )
                      ),
                    ),
                  ]
                ),
            ), 
            ), 

          
          ),

           //Sticks
          Align(
            alignment: Alignment.center,
            child: Visibility(
              visible: _isShowSticks,
              child: Container(
              width: 300,
              height: 725,
              margin: const EdgeInsets.only(top: 10, bottom: 10), 
              padding: const EdgeInsets.all(20),
              color: const Color(0xFF686868),
              child: Column(
                children: [

                  //Sticks Tag 
                  const Align( 
                    alignment: Alignment.topLeft,
                    child: Text(
                    'Sticks', 
                    style: TextStyle(fontFamily: 'Body', color: Colors.white, fontSize: 15),
                    ),  
                  ), 

                  const SizedBox(height: 20,), 
                  
                  //Sticks container 
                  Container(
                      width: 260,
                      alignment: Alignment.topCenter,
                      decoration: BoxDecoration(
                        color: const Color(0xFF244D3E),
                        border: Border.all(width: 6, color: Colors.white)
                      ),
                        
                        //Sticks png 

                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [

                          //Sticks Image 
                          Container(
                            height: 250,
                            width: 150,
                            alignment: Alignment.bottomCenter,//controls text 
                            decoration: const BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage('assets/images/stick.png'),//
                              ),
                              
                            ),
                          
                          ),


                          //Sticks Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 250,
                            color: Colors.white,
                            child: Column(
                              children: const [
                                Expanded(
                                  child: SingleChildScrollView(
                                      scrollDirection: Axis.vertical,
                                      child: Text(
                                      'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                                        style: TextStyle(
                                        color: Colors.black, 
                                        fontFamily: 'Body',
                                      ),
                                    ),
                                  )
                                ),

                                
                              ],
                            )

                            
                            
                          ),
                        ],
                      )
                      
                    ),
                  const SizedBox(height: 30,), 

                  //Close Button 
                  Align(
                      alignment: const Alignment(1.1,0.0),
                      child: ElevatedButton(
                        onPressed: () {
                          setState(
                            () {
                              _isShowSticks = !_isShowSticks; 
                            },
                          );
                        }, 
                        child: const Text(
                          'Close', 
                          style: TextStyle(fontFamily: 'body'),
                        )
                      ),
                    ),
                  ]
                ),
            ), 
            ), 

          
          ),
                 
          //Chests
          Align(
            alignment: Alignment.center,
            child: Visibility(
              visible: _isShowChests,
              child: Container(
              width: 300,
              height: 725,
              margin: const EdgeInsets.only(top: 10, bottom: 10), 
              padding: const EdgeInsets.all(20),
              color: const Color(0xFF686868),
              child: Column(
                children: [

                  //Chests Tag 
                  const Align( 
                    alignment: Alignment.topLeft,
                    child: Text(
                    'Chests', 
                    style: TextStyle(fontFamily: 'Body', color: Colors.white, fontSize: 15),
                    ),  
                  ), 

                  const SizedBox(height: 20,), 
                  
                  //Chests container 
                  Container(
                      width: 260,
                      alignment: Alignment.topCenter,
                      decoration: BoxDecoration(
                        color: const Color(0xFF244D3E),
                        border: Border.all(width: 6, color: Colors.white)
                      ),
                        
                        //Chests png 

                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [

                          //Chests Image 
                          Container(
                            height: 250,
                            width: 150,
                            alignment: Alignment.bottomCenter,//controls text 
                            decoration: const BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage('assets/images/chest.png'),//
                              ),
                              
                            ),
                          
                          ),


                          //Chest Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 250,
                            color: Colors.white,
                            child: Column(
                              children: const [
                                Expanded(
                                  child: SingleChildScrollView(
                                      scrollDirection: Axis.vertical,
                                      child: Text(
                                      'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                                        style: TextStyle(
                                        color: Colors.black, 
                                        fontFamily: 'Body',
                                      ),
                                    ),
                                  )
                                ),

                                
                              ],
                            )

                            
                            
                          ),
                        ],
                      )
                      
                    ),
                  const SizedBox(height: 30,), 

                  //Close Button 
                  Align(
                      alignment: const Alignment(1.1,0.0),
                      child: ElevatedButton(
                        onPressed: () {
                          setState(
                            () {
                              _isShowChests = !_isShowChests; 
                            },
                          );
                        }, 
                        child: const Text(
                          'Close', 
                          style: TextStyle(fontFamily: 'body'),
                        )
                      ),
                    ),
                  ]
                ),
            ), 
            ), 

          
          ),
          
           //Stairs
          Align(
            alignment: Alignment.center,
            child: Visibility(
              visible: _isShowStairs,
              child: Container(
              width: 300,
              height: 725,
              margin: const EdgeInsets.only(top: 10, bottom: 10), 
              padding: const EdgeInsets.all(20),
              color: const Color(0xFF686868),
              child: Column(
                children: [

                  //Stairs Tag 
                  const Align( 
                    alignment: Alignment.topLeft,
                    child: Text(
                    'Stairs', 
                    style: TextStyle(fontFamily: 'Body', color: Colors.white, fontSize: 15),
                    ),  
                  ), 

                  const SizedBox(height: 20,), 
                  
                  //Stairs container 
                  Container(
                      width: 260,
                      alignment: Alignment.topCenter,
                      decoration: BoxDecoration(
                        color: const Color(0xFF244D3E),
                        border: Border.all(width: 6, color: Colors.white)
                      ),
                        
                        //Stairs png 

                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [

                          //Stairs Image 
                          Container(
                            height: 250,
                            width: 150,
                            alignment: Alignment.bottomCenter,//controls text 
                            decoration: const BoxDecoration(
                              image: DecorationImage(
                                image: AssetImage('assets/images/stairs.png'),//
                              ),
                              
                            ),
                          
                          ),


                          //Stairs Description 
                          Container(
                            padding: const EdgeInsets.all(20),
                            width: 270,
                            height: 250,
                            color: Colors.white,
                            child: Column(
                              children: const [
                                Expanded(
                                  child: SingleChildScrollView(
                                      scrollDirection: Axis.vertical,
                                      child: Text(
                                      'Lorem ipsum dolor sit amet. Aut laboriosam harum hic neque quidem in obcaecati magni cum repellendus vero. Qui deserunt nulla sed quod aperiam a aspernatur nulla. Est architecto voluptatibus quo minus praesentium ut repellendus quos nam similique sint et voluptas dolore. Eos laborum iusto non accusantium reprehenderit vel magni culpa ex itaque libero eos corrupti repellendus. Eum molestiae reprehenderit aut vero maxime qui molestiae doloribus hic explicabo libero 33 tempora molestiae et harum quam in consequuntur autem? Qui accusantium voluptatem qui voluptatem molestiae vel exercitationem minima et ratione rerum est libero alias rem officiis officia. Et nostrum veniam ex quam adipisci sed autem nostrum et consequatur recusandae ea necessitatibus quis qui possimus laboriosam At voluptatem rerum. Eum libero nostrum aut repellendus praesentium qui voluptas quisquam At facilis ducimus a velit maiores. Aut consequatur unde qui quia repudiandae sit molestiae voluptas in nobis necessitatibus qui nobis velit qui exercitationem nemo.', 
                                        style: TextStyle(
                                        color: Colors.black, 
                                        fontFamily: 'Body',
                                      ),
                                    ),
                                  )
                                ),
                              ],
                            )

                            
                            
                          ),
                        ],
                      )
                      
                    ),
                  const SizedBox(height: 30,), 

                  //Close Button 
                  Align(
                      alignment: const Alignment(1.1,0.0),
                      child: ElevatedButton(
                        onPressed: () {
                          setState(
                            () {
                              _isShowStairs = !_isShowStairs; 
                            },
                          );
                        }, 
                        child: const Text(
                          'Close', 
                          style: TextStyle(fontFamily: 'body'),
                        )
                      ),
                    ),
                  ]
                ),
            ), 
            ), 

          
          ),

          //About Popup 
          Align(
            alignment: const Alignment(0.0, 0.0),
            child:  Visibility(
            visible: _isShow,
            child: Container(
            width: 350,
            height: 270,
            color: Colors.white,
            padding: const EdgeInsets.all(20),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start, 
              crossAxisAlignment: CrossAxisAlignment.start,
              children:  [
                const Text(
                  'About',
                  style: TextStyle(color: Colors.black, fontFamily: 'Body', fontSize: 22), 
                ), 
                const Text(
                  '\nCreated by Princess-Osaani Hornage',
                  style: TextStyle(color: Colors.black, fontFamily: 'Body', fontSize: 20), 
                ), 
                const Text(
                  '\nBased on the work done in 235s Design to Spec Homework.',
                  style: TextStyle(color: Colors.black, fontFamily: 'Body', fontSize: 20), 
                ), 
                const Text(
                  '\nFebruary 21, 2022',
                  style: TextStyle(color: Colors.black, fontFamily: 'Body', fontSize: 20), 
                ), 
                const SizedBox(
                  height: 40,
                ), 
                Align(
                  alignment: const Alignment(1.1,0.8),
                  child:  ElevatedButton(
                    onPressed: () {
                      setState(
                        () {
                          _isShow = !_isShow; 
                        },
                      );
                    }, 
                    child: const Text(
                    'OK', 
                    style: TextStyle(fontFamily: 'body'),
                  )
                  ),
                ),
              ]
           ),
         ),
           ),
        ),
        ],
      )
    );
  }
}
